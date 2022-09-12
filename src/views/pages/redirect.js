export const Redirect = (link) => {
  useEffect(() => {
    window.location.replace(link);
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div style={styles.container}>
      <h3>Redirecting...</h3>
    </div>
  );
};

const styles = {
  container: {
    padding: 30,
  },
  link: {
    color: "blue",
    textDecoration: "underline",
  },
};
