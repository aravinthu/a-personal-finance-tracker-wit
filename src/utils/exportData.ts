import { saveAs } from 'file-saver';

export function exportData(data, fileName) {
  const json = JSON.stringify(data);
  const blob = new Blob([json], {type: 'application/json'});
  saveAs(blob, fileName);
}