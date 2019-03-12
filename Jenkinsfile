node ('docker'){

	stage("checkout") {
		checkout scm
	}
	stage 'Docker'
	docker.withRegistry('https://docker.io.is2.de/artifactory', 'docker.io.is2.de') {

     def image
     image = docker.build("is2ag/PWADemo:${version}", "--build-arg BUILD_NUMBER=${env.BUILD_NUMBER} --build-arg VERSION=${version} .")

     stage 'Test'
     docker.image(image.id).withRun {c ->
      sh '/bin/bash'
     }

     stage 'Push'
     //alle 3 Tags ins docker.io Repo pushen
     //sh "docker push docker.io.is2.de/${imagename}"
     image.push()
     if (env.BRANCH_NAME == 'trunk') {
       sh "echo 'BRANCH_NAME is trunk so push #latest tag'"
       image.push('latest')
     }
   }
}