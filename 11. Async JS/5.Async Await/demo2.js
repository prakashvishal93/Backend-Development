async function processing() {
  let file = await writeFile(downloadData);

  let uploadResponse1 = await uploadData(file, 'www.googledrive.com');
  let uploadResponse2 = await uploadData(file, 'www.microsoft.com');
  let uploadResponse3 = await uploadData(file, 'www.gpt.com');
  let uploadResponse4 = await uploadData(file, 'www.facebook.com');

  return uploadResponse1;
}

console.log('Start');
processing();
console.log('end');
