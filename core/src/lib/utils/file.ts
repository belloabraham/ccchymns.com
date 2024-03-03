export class FileUtil {
  static EXTENSION = {
    MP3: 'mp3',
    PDF: 'pdf',
  };
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
