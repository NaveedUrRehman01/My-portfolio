import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
    
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={props.link} target="_blank">
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.pname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
         {props.details}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  
  );
}
