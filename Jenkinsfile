pipeline {
    agent { docker { image 'cypress/browsers:node14.16.0-chrome90-ff88' } }
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
    post {
        always {
            junit 'cypress/reports/*.xml'
        }
    }
}