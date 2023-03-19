import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ActivityCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.randomlists.com/img/animals/snowy_owl.webp"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Activity
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is some activity text. This is some activity text. This is some activity text.
          This is some activity text. This is some activity text.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}