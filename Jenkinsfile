pipeline {
    agent { docker { image 'alpine3.11' } }
    stages {
        stage('build') {
            steps {
                sh 'yarn'
            }
        },
        stage('lint') {
            steps {
                sh 'yarn lint'
            }
        },
        stage('test') {
            steps {
                sh 'yarn cypress:run'
            }
        }
    }
}