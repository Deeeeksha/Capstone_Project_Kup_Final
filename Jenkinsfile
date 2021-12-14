Pipeline
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
  stage('install npm')
{
    steps
    {
      sh 'npm install'
    }
}

  stage(“npm run”)
{
    steps
    {
      sh 'npm run build'
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
          sh 'docker build -t deeeksha/capstone:${GIT_COMMIT} . '
        }
      }
      stage('pushing docker image')
      {
        steps{
          sh '''
          echo $dockerhub_PSW | docker login -u $dockerhub_USR 
          docker push deeeksha/capstone:${GIT_COMMIT} 
          docker logout
          '''

        }
      }
    }
}

}
