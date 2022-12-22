const AboutUsCard = ({leader}) => {
	return (
		<div className="w-[45%] text-center rounded-[10px] pl-[5px] pt-[15px] pr-[5px] pb-[15px] bg-white mt-[10px]" style={{ boxShadow: "0px 10px 70px -5px rgba(7, 24, 50, 0.07)" }}>
			<div style={{ borderBottom: "1px solid rgba(71, 80, 96, .2)" }}>
				<p className="font-medium text-lg text-[#142630]" style={{ fontFamily: "Jost" }}>{leader ? leader.name : ""}</p>
				<p className="pl-[10px] pr-[10px] text-[#475060]" style={{ fontFamily: "Jost" }}>{leader ? leader.position : ""}</p>
			</div>
			<p className="text-sm mt-[10px] text-[#475060]" style={{ fontFamily: "Jost" }}>{leader ? leader.description : ""}</p>
		</div>
	)
}

export default AboutUsCard;