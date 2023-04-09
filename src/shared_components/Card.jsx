import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import busywork from '../images/busywork.png';
import charity from '../images/charity.jpeg';
import cooking from '../images/cooking.jpg';
import diy from '../images/diy.png';
import education from '../images/education.jpeg';
import music from '../images/music.png';
import recreational from '../images/recreational.jpeg';
import relaxation from '../images/relaxation.jpeg';
import social from '../images/social.jpeg';
import unknown from '../images/unknown.png';

export default function ActivityCard(activityDetails) {

  const urlDic = {
    "education": education,
    "recreational":recreational,
    "social": social,
    "diy": diy,
    "charity": charity,
    "cooking": cooking,
    "relaxation": relaxation,
    "music": music,
    "busywork": busywork,
  }

  let imageUrl;

  if (!Object.keys(urlDic).includes(activityDetails.type)) {
    imageUrl = '../images/unknown.png';
  } else {
    imageUrl = urlDic[activityDetails.type]
  }

  return (
    <Card sx={{ width: '300px' }}>
      <CardMedia
        component="img"
        alt={`Image: ${urlDic[activityDetails.type]}`}
        height="240"
        image={imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Description
        </Typography>
        <Typography sx={{marginBottom:'.8rem'}} variant="body2" color="text.secondary">
          {activityDetails.activity}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Type: {activityDetails.type}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Participants: {activityDetails.participants}
        </Typography>
      </CardContent>
    </Card>
  );
}