export const handleImage = (e, setImage) => {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    setImage(url);
  }
};
