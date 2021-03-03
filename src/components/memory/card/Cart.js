import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      minWidth:300,
      maxHeight:400,
      margin: "20px 7px",
    },
    media: {
      height: 0,
      paddingTop: '35.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
const Cart = ({currentUser,memory}) => {
    const classes=useStyles();
    return (
    <Card className={classes.root}>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
                {currentUser[0].toUpperCase()}
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title={memory.title}
           
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            Date: { memory.date && memory.date.toString().slice(0,10)}
            </Typography>
        </CardContent>
        <CardMedia
            className={classes.media}
            image={memory.image}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            {memory.message}
            </Typography>
        </CardContent>

        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            {memory.tags}
            </Typography>
        </CardContent>

        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>  
        </CardActions>
        
    </Card>
      // <div>{memory.title}</div>
    )
}

export default Cart






