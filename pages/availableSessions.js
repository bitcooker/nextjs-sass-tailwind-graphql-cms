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
	useEffect(() => {
		getSession().then((res) => {
			setSessions(res.items);
			// setDescription1(res.items[1].description.json.content[0].content[0].value);
		});

		getSessionAddtionalInfo().then((res) => {
			setSubtitles1(res.items);
			// setSubtitles1([...subtitles1, { title: res.items[1].header, content: res.items[1].body.json.content[0].content[0].value }])
			// console.log(res.items, res.items.length)
		});

		getSpeaker().then((res) => {
			setSpeakers(res.items);
			console.log(res.items);
		})

	}, [])

	return (
		<div className="flex bg-white flex-col items-center" >
			<link href='https://fonts.googleapis.com/css?family=Jost' rel='stylesheet' />
			<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' />
			<Header />
			<TopTitle title={"Available Sessions"} />
			<div className="relative z-[11] pl-[15%] pr-[15%] bg-white pt-[80px]" style={{ maxWidth: "1374px" }}>
				<AvailableCard img={sessions[1] ? sessions[1].banner.url : ""} title={sessions[1] ? sessions[1].title : ""} description={sessions[1] ? sessions[1].description.json.content[0].content[0].value : ""} subtitles={subtitles1}>
					<SessionSpeaker>
						<Speaker img={"https://images.ctfassets.net/ddgzaaogwqkq/2vYjDB1FJfwY7XHbFenBU1/065cef208da354a8bbb517699921edcd/Placeholder_view_vector.svg.png"} name={speakers[0] ? speakers[0].name : ""} content={speakers[0] ? speakers[0].background : ""} />
						<Speaker img={"https://images.ctfassets.net/ddgzaaogwqkq/2vYjDB1FJfwY7XHbFenBU1/065cef208da354a8bbb517699921edcd/Placeholder_view_vector.svg.png"} name={speakers[1] ? speakers[1].name : ""} content={speakers[1] ? speakers[1].background : ""} />
					</SessionSpeaker>
					<Social />
				</AvailableCard>
				<AvailableCard img={sessions[0] ? sessions[0].banner.url : ""} title={sessions[0] ? sessions[0].title : ""} description={sessions[0] ? sessions[0].description.json.content[0].content[0].value : ""} indexPart={indexPart2}>
					<SessionSpeaker>
						<Speaker img={"https://images.ctfassets.net/ddgzaaogwqkq/2vYjDB1FJfwY7XHbFenBU1/065cef208da354a8bbb517699921edcd/Placeholder_view_vector.svg.png"} name={speakers[0] ? speakers[0].name : ""} content={speakers[0] ? speakers[0].background : ""} />
						<Speaker img={"https://images.ctfassets.net/ddgzaaogwqkq/2vYjDB1FJfwY7XHbFenBU1/065cef208da354a8bbb517699921edcd/Placeholder_view_vector.svg.png"} name={speakers[1] ? speakers[1].name : ""} content={speakers[1] ? speakers[1].background : ""} />
						<Speaker img={"/src/img/speaker3.png"} name={"Laurie Moskowitz"} content={"LORE Strategies"} />
					</SessionSpeaker>
					<Social />
				</AvailableCard>
				<AvailableCard img={"/src/img/image 11-lg.png"} title={"What Can You Trust?"} description={description3} >
					<SessionSpeaker>
						<Speaker img={"https://images.ctfassets.net/ddgzaaogwqkq/2vYjDB1FJfwY7XHbFenBU1/065cef208da354a8bbb517699921edcd/Placeholder_view_vector.svg.png"} name={speakers[0] ? speakers[0].name : ""} content={speakers[0] ? speakers[0].background : ""} />
						<Speaker img={"/src/img/speaker3.png"} name={"Laurie Moskowitz"} content={"LORE Strategies"} />
					</SessionSpeaker>
					<Social />
				</AvailableCard>
			</div>
			<Bottom />
		</div>
	)
}

export default AvailableSessions;