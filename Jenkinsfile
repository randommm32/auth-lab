pipeline {
    agent any

    environment {
        APP_NAME = 'auth-lab'  // Change to your application name
        BUILD_DIR = 'build'   // or 'build', 'dist' for your project
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                bat 'npm install '
                bat 'npm run build'
                bat 'echo Build step — replace with your command'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
                sh 'echo Test step — replace with your command'
            }
            post {
                always {
                    junit '**/target/surefire-reports/*.xml'
                }
            }
        }

        stage('Archive') {
            steps {
                echo 'Archiving build artifacts...'
                archiveArtifacts artifacts: 'target/*.jar', allowEmptyArchive: true
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline FAILED — check the logs above.'
        }
    }
}
