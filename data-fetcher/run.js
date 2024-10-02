// fetch-data.js
import fs from 'fs';
import path from 'path';

async function fetchData() {
	const dirPath = '/home/ubuntu/test';
	const filePath = path.join(dirPath, 'works.txt');

	try {
		// Check if directory exists, if not, create it
		if (!fs.existsSync(dirPath)) {
			fs.mkdirSync(dirPath, { recursive: true });
			console.log(`Directory ${dirPath} created.`);
		}

		// Write data to works.txt (for example, a simple string)
		const data = "This is a test content for works.txt";
		fs.writeFileSync(filePath, data);
		console.log(`File created and data written to ${filePath}`);
	} catch (error) {
		console.error('Error creating directory or writing file:', error);
	}
}

fetchData();
