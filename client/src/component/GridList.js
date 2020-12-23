import React, { useEffect, useState  } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardFrame from './card/CardFrame';
import axios from "axios";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const apiURL = "http://localhost:8000";

const GridList = ({category}) => {
  const classes = useStyles();
  const [currentCategory, setCategory] = useState('Hot');
  const [datetime, setDatetime] = useState('20201202');
  const [image_url, setImage_url] = useState(null);
  const [title, setTitle] = useState(null);
  const [test, setTest] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const message = async ()=> {
  //   try {
  //     let res = await axios.get('http://localhost:8000/test', {
  //       params : {
  //         datetime : datetime,
  //         cate : currentCategory,
  //       }
  //     });
  //     let result = res.data.message;
  //     setData(result);
  //   } catch(e) {
  //     console.log(e);
  //   }
  // };

  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);
      const response = await axios.get(`${apiURL}/test`, {
        params : {
          datetime : datetime,
          cate : currentCategory,
        }
      })
      setData(response.data);
    } catch(e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData()
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data) return null;
<<<<<<< HEAD
=======

=======
=======
>>>>>>> d816cd3 (뭐 어쩔꺼야)
=======
>>>>>>> 4e612bb (feat: add Route function)
=======
>>>>>>> 47210b9 (test for route function)

  const _getLiveData = ({datetime}) => {
    let items = [];
    fetch('${apiURL}/test/go/')
=======
  const [test, setTest] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

<<<<<<< HEAD
<<<<<<< HEAD
  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8000/todo")
    const todos = await response.json()
    setTest(todos.data);
>>>>>>> b193f69 (test for route function)
  }

  useEffect(() => {
    setCategory(category);
    let items = [];
<<<<<<< HEAD
    await fetch("test/go")
      .then(response => response.json())
      .then((data) => {
        data.forEach((doc) => {
          items.push({
            image_url : doc.image_url,
            title : doc.title,
            url : doc.url,
            keyword : doc.keyword,
            press : doc.press,
            title_list
          })
        })
        
      })
  })
<<<<<<< HEAD
>>>>>>> 0c25cb0 (feat: add Route function)
=======
=======
    fetchUsers();
    });
>>>>>>> b193f69 (test for route function)
=======
  const message = async ()=> {
=======
  // const message = async ()=> {
  //   try {
  //     let res = await axios.get('http://localhost:8000/test', {
  //       params : {
  //         datetime : datetime,
  //         cate : currentCategory,
  //       }
  //     });
  //     let result = res.data.message;
  //     setData(result);
  //   } catch(e) {
  //     console.log(e);
  //   }
  // };

  const fetchData = async () => {
>>>>>>> dddd49b ([chor] girdlist useeffect)
    try {
      setError(null);
      setData(null);
      setLoading(true);
      const response = await axios.get(`${apiURL}/test`, {
        params : {
          datetime : datetime,
          cate : currentCategory,
        }
      })
      setData(response.data);
    } catch(e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    // message()
    fetchData();
  }, []);
>>>>>>> 524ff31 ([build] build base fastAPI successfully)

<<<<<<< HEAD
>>>>>>> 47210b9 (test for route function)
=======
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data) return null;

>>>>>>> cde2e07 ([chor] backend update)
>>>>>>> 5f1506e ([chor] girdlist useeffect)
  return (
    <React.Fragment>
        <CssBaseline/>
          <main>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cde2e07 ([chor] backend update)
            {/* <ul>
              {data.map(doc => {
                <li>
                  {data.datetime} ({data.cate})
                </li>
              })}
            </ul> */}
<<<<<<< HEAD
<<<<<<< HEAD
            <Typography>{data.title}</Typography>
            <Typography>{currentCategory}</Typography>
<<<<<<< HEAD
=======
            <Typography>{test}</Typography>
>>>>>>> 47210b9 (test for route function)
=======
=======
>>>>>>> cde2e07 ([chor] backend update)
>>>>>>> 5f1506e ([chor] girdlist useeffect)
            <Typography>{test}</Typography>
=======
            <Typography>{data.message}</Typography>
>>>>>>> 26b9194 ([chor] girdlist useeffect)
            <Typography>{currentCategory}</Typography>
            <Typography>{title}</Typography>
            <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {data.map((card) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Typography>{card.title}</Typography>
                  <CardFrame />
                </Grid>
              ))}
            </Grid>
          </Container>
          </main>
    </React.Fragment>
  );  
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default GridList;