pipeline {	
	agent any
	    environment {
    NODE_SCANNER = tool 'Nodejs'
  }
  
stages {
		stage('Unit Test') {
			steps {
				 nodejs(nodeJSInstallationName: 'Nodejs') {
                    sh '''cd ./cidr_convert_api/node/
		    npm run test''' 			 
					
         }
			}
		}
  }
}
