pipeline {
    agent any
    environment {
      SCANNER_HOME = tool 'sonar'
    }

  stages {
    stage('Static Code Analysis') {
      steps  {
        withSonarQubeEnv('Sonarcloud') {
          sh '${SCANNER_HOME}/bin/sonar-scanner'
        }
      }
    }
    stage('Unit Testing activity') {
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
