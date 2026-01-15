import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=800";
  const COLD_URL =
    "https://images.unsplash.com/photo-1505322266409-1c77f8b33a8a?w=800";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1558409057-bbe679023136?w=800";

  let imageURL = HOT_URL;

  if (info.humidity > 80) {
    imageURL = RAIN_URL;
  } else if (info.temp < 15) {
    imageURL = COLD_URL;
  }

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={imageURL} />

        <CardContent>
          <Typography variant="h5">{info.city}</Typography>

          <Typography variant="body2" component="span">
            <p>Temperature: {info.temp}°C</p>
            <p>Humidity: {info.humidity}%</p>
            <p>Min Temp: {info.tempMin}°C</p>
            <p>Max Temp: {info.tempMax}°C</p>
            <p>
              Weather: <b>{info.weather}</b>
            </p>
            <p>Feels Like: {info.feelslike}°C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
