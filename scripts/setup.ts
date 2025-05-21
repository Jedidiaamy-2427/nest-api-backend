import { execSync } from 'child_process';
import * as fs from 'fs';
import inquirer from 'inquirer';

async function setup() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter the project name:',
      default: 'nestjs-jwt-auth-app',
    },
    {
      type: 'input',
      name: 'projectEnv',
      message: 'Enter the project environement (e.g., development, production)',
      default: 'development',
    },
    {
      type: 'input',
      name: 'database',
      message: 'Enter the database type (e.g., postgres, mysql):',
      default: 'postgres',
    },
    {
      type: 'input',
      name: 'databaseHost',
      message: 'Enter the database host:',
      default: 'localhost',
    },
    {
      type: 'input',
      name: 'databasePort',
      message: 'Enter the database port:',
      default: '5432',
    },
    {
      type: 'input',
      name: 'databaseUsername',
      message: 'Enter the database username:',
      default: 'my_username',
    },
    {
      type: 'input',
      name: 'databasePassword',
      message: 'Enter the database password:',
      default: 'my_db__password',
    },
    {
      type: 'input',
      name: 'databaseName',
      message: 'Enter the database name:',
      default: 'my_database',
    },
    {
      type: 'input',
      name: 'jwtSecret',
      message: 'Enter the JWT secret:',
      default: 'your_jwt_secret',
    },
    {
      type: 'input',
      name: 'applicationPort',
      message: 'Enter the port where your application will run',
    },
  ]);

  const envContent = `
# Environment variables for ${answers.projectName}
PORT=${answers.applicationPort}
NODE_ENV=${answers.projectEnv}

DATABASE_TYPE=${answers.database}
DATABASE_HOST=${answers.databaseHost}
DATABASE_PORT=${answers.databasePort}
DATABASE_USERNAME=${answers.databaseUsername}
DATABASE_PASSWORD=${answers.databasePassword}
DATABASE_NAME=${answers.databaseName}

JWT_SECRET=${answers.jwtSecret}
  `.trim();

  fs.writeFileSync('.env', envContent);
  console.log('.env file created successfully!');
  // Install necessary packages
  console.log('Installing necessary packages...');
  execSync('npm install', { stdio: 'inherit' });
  console.log('Packages installed successfully!');
}

setup().catch((error) => {
  console.error('Error during setup:', error);
});
