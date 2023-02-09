import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

class FileService {
  save(file: any) {
    const fileExtension = file.mimetype.split('/')[1];
    const fileName = uuidv4() + "." + fileExtension;
    const filePath = path.resolve('static', fileName);
    file.mv(filePath);
    return fileName;
  }
}

export default new FileService();
