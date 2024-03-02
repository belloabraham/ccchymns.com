export class FileUtil {
  static rename(file: File, newNameWithExt: string) {
    return new File([file], newNameWithExt, {
      type: file.type,
      lastModified: file.lastModified,
    });
  }

  static getFileExtension(fileName: string): string {
    return fileName.slice(((fileName.lastIndexOf('.') - 1) >>> 0) + 2);
  }
}
