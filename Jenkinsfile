pipeline {	
	agent any
	    environment {
    SCANNER_HOME = tool 'sonar'			
  }
  
stages {
		stage('Static Code Analysis') {
			step  {
				 withSonarQubeEnv('sonarqube') {
           	    sh '${SCANNER_HOME}/bin/sonar-scanner'
       	 }
	}
		stage('Unit Test') {
			steps {
				 nodejs(nodeJSInstallationName: 'Nodejs') {
                    sh '''cd ./cidr_convert_api/node/
		    npm i
		    npm run test''' 			 
					
         }
	}
		
    }
  }
}
