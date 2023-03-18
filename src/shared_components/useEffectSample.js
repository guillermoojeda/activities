const [loading, setLoading] = useState(true);
  console.log(money);

  useEffect(() => {
    dispatch(getMoney()).then(() => setLoading(false));
  }, [dispatch]);

  if (!money || !money[0] || money.length === 0) {
    return null;
  }
