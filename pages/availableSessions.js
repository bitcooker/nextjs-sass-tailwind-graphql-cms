import { useEffect, useState } from "react";
import AvailableCard from "../components/availableCard";
import Bottom from "../components/bottom";
import Header from "../components/header"
import SessionSpeaker from "../components/sessionSpeaker";
import Social from "../components/social";
import Speaker from "../components/speaker";
import TopTitle from "../components/topTitle"
import { getSession, getSessionAddtionalInfo, getSpeaker } from "../src/utils/contentful";

const AvailableSessions = () => {
	const [sessions, setSessions] = useState([]);
	const [subtitles1, setSubtitles1] = useState([]);
	const [speakers, setSpeakers] = useState([]);
	const [description3, setDescription3] = useState('This session is designed to teach students how to discern trust from lies and how to identify malicious content that may be disguised. They will learn how to assess content to determine its validity as well as individuals or organizations to determine if they are a trustworthy source. In the breakout sessions, subject matter experts will share with students the organizations who are trusted in that content area and ways in which students can access their resources and support their work.')
	const [indexPart2, setIndexPart2] = useState(
		[
			'Activist/Influencer who establishes an identity advocating for specific causes. Intentional about developing and expanding a network that shares this commitment.',
			'Reporter/Amplifier who shares information and opportunities within their existing network.',
			'Organizer who uses social media to inspire and organize individuals around particular causes.',
			'Monitor who reports disinformation and divisive content to interested organizations.'
		])

	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	const convertDate = (start) => {
		const date = new Date(start);
		const dateString = `${monthNames[date.getMonth(date)]} ${date.getDate(date)}, ${date.getFullYear(date)}`
		return dateString;
	}

	const convertTime = (start) => {
		const date = new Date(start);
		const time = date.getHours(date) + 11;
		const dateString = `${date.getHours(date) + 11} : ${date.getUTCMinutes(date)} : ${date.getSeconds(date)}`
		return dateString;
	}
	useEffect(() => {
		getSession().then((res) => {
			setSessions(res.items);
		});

		getSessionAddtionalInfo().then((res) => {
			setSubtitles1(res.items);
		});

		getSpeaker().then((res) => {
			setSpeakers(res.items);
		})

		if (localStorage.getItem("SessionId")) {
			let id = localStorage.getItem("SessionId");
			if (document.getElementById("session-" + id)) {
				let elementPos = document.getElementById("session-" + id).offsetTop;
				window.scrollTo({
					top: elementPos + 300,
					behavior: "smooth"
				})
			}
		}
	})

	const showSpeaker = (item, key) => {
		let imageUrl = '';
		for (let i = 0; i < speakers.length; i++) {
			if (item.name === speakers[i].name)
				imageUrl = speakers[i].image.url;
		}
		return (
			<Speaker key={key} img={imageUrl} name={item.name} content={item.background} />
		)
	}

	return (
		<div className="flex bg-white flex-col items-center" >
			<link href='https://fonts.googleapis.com/css?family=Jost' rel='stylesheet' />
			<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' />
			<Header />
			<TopTitle title={"Available Sessions"} />
			<div className="relative z-[11] pl-[15%] pr-[15%] bg-white pt-[80px]" style={{ maxWidth: "1374px" }}>
				{sessions.map((session, index) => (
					<AvailableCard
						key={index}
						id={index}
						img={session.banner.url}
						title={session.title}
						description={session.description.json.content[0].content[0].value}
						date={convertDate(session.startTime)}
						time={"03.00PM - 05:00AM ET"}
					>
						<SessionSpeaker>
							{session.speakersCollection.items.map((item, key) => (
								showSpeaker(item, key)
							))}
						</SessionSpeaker>
						<Social />
					</AvailableCard>
				))}
			</div>
			<Bottom />
		</div>
	)
}

export default AvailableSessions;