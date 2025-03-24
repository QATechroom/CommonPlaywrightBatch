import fs from 'fs';
import Papa from 'papaparse';

export class CSVReader {
    static async readCSV(filePath: string): Promise<Record<string, string>[]> {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    reject(`Error reading file: ${err.message}`);
                } else {
                    const parsedData = Papa.parse(data, { header: true, skipEmptyLines: true });
                    resolve(parsedData.data as Record<string, string>[]);
                }
            });
        });
    }
}
