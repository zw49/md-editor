export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard');
      // Optional: Show user feedback
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
};
