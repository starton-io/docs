import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { HomepageSection as Section } from "./HomepageComponents"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"

const bull = (
	<Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
		•
	</Box>
)

export default function BasicGrid() {
	return (
		<Box sx={{ flexGrow: 2 }}>
			<Grid container justify="space-around" spacing={12}>
				<Grid justify="space-around" xs={4}>
					<Card justify="space-around" sx={{ minWidth: 200 }}>
						<CardContent>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom></Typography>
							<Typography variant="h5" component="div">
								Getting started
							</Typography>
							<Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
							<Typography variant="body2">
								See your first transaction in four steps.
								<br />
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid justify="space-around" xs={4}>
					<Card justify="space-around" sx={{ minWidth: 200 }}>
						<CardContent>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom></Typography>
							<Typography variant="h5" component="div">
								Getting started
							</Typography>
							<Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
							<Typography variant="body2">
								See your first transaction in four steps.
								<br />
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid xs={4}>
					<Card sx={{ minWidth: 200 }}>
						<CardContent>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom></Typography>
							<Typography variant="h5" component="div">
								Getting started
							</Typography>
							<Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
							<Typography variant="body2">
								See your first transaction in four steps.
								<br />
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</Box>
	)
}
