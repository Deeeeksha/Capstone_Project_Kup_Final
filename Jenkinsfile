pipeline
{
    agent any
    tools 
    {
        nodejs 'Node'
    }
    environment{
      dockerhub=credentials('dockerhub')    
      }

stages
  {

  stage('install node modules')
  {
    steps
    {
      sh 'npm install'
    }

  }
  

  stage('install node modules for client')
  {
      when{
          branch 'test'
      }
    steps
    {
       
      sh '''
      cd client
      npm install
      '''
    }
  }


stage(‘package’)
{
  when {
    branch 'prod'
  }
    stages{
      stage('building docker image')
      {
        steps
        {
          sh 'docker build -t deekshaaa/capstone:${GIT_COMMIT} . '
        }
      }
      stage('pushing docker image')
      {
        steps{
          sh '''
          echo $dockerhub_PSW | docker login -u $dockerhub_USR --password-stdin
          docker push deekshaaa/capstone:${GIT_COMMIT} 
          docker logout
          '''

        }
      }
    }
}

}
}
