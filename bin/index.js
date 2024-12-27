#!/usr/bin/env node

const fs = require('fs-extra'); // Replace fs and copyfiles with fs-extra
const path = require('path');
const { execSync } = require('child_process');
const colors = require('colors'); // Import colors for colorful logs

// Paths for the template and destination
const source = path.join(__dirname, '../templates'); // Template source folder
const destination = process.cwd(); // Target folder (current working directory)

// Function to copy template files
function copyTemplate() {
  console.log('Starting template setup...'.cyan); // Cyan text for starting message

  // Ensure the source directory exists
  if (!fs.existsSync(source)) {
    console.error('Error: Source template folder does not exist!'.red); // Red text for errors
    process.exit(1);
  }

  console.log('Copying template files...'.yellow); // Yellow text for progress

  try {
    // Copy entire template folder recursively
    fs.copySync(source, destination); // Replace copyfiles with fs-extra's copySync
    console.log('Template copied successfully!'.green); // Green text for success
    installDependencies(destination);
  } catch (err) {
    console.error('Error copying files:'.red, err);
    process.exit(1);
  }
}

// Function to install dependencies
function installDependencies(dest) {
  console.log('Installing dependencies...'.yellow); // Yellow text for progress

  // Check if package.json exists in the copied template
  const packageJsonPath = path.join(dest, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    console.error('Error: No package.json found in the template.'.red);
    process.exit(1);
  }

  try {
    // Run 'npm install' in the destination directory
    execSync('npm install', { stdio: 'inherit', cwd: dest });
    console.log('Dependencies installed successfully!'.green);
  } catch (error) {
    console.error('Failed to install dependencies:'.red, error.message);
    process.exit(1);
  }
}

copyTemplate();
