import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ActivityCard(activityDetails) {

  return (
    <Card sx={{ width: '340px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="240"
        image="https://www.randomlists.com/img/animals/snowy_owl.webp"
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