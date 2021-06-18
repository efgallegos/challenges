pipeline {
  agent {
    docker {
      image 'node:14-alpine3.11'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'yarn'
      }
    }

    stage('test') {
      steps {
        sh 'yarn cypress:run'
      }
    }

  }
}