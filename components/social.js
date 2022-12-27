const Social = () => {
	return (
		<div className="pt-[15px] mt-[20px] pl-[15px] pr-[15px] bg-[#F5F5F5] ml-[50px] rounded-[10px] pb-[20px]">
			<p className="font-medium text-[#475060]" style={{ fontFamily: "Lato" }}>Share With Your Friends:</p>
			<div className="w-full bg-white flex rounded-[30px] p-[10px] items-center mt-[10px] justify-between cursor-pointer">
				<div className="items-center flex ">
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="40" height="40" rx="20" fill="#077BEC" />
						<path d="M25.0098 21.25L25.5652 17.6305H22.0922V15.2816C22.0922 14.2914 22.5773 13.3262 24.1328 13.3262H25.7117V10.2445C25.7117 10.2445 24.2789 10 22.909 10C20.0488 10 18.1793 11.7336 18.1793 14.8719V17.6305H15V21.25H18.1793V30H22.0922V21.25H25.0098Z" fill="white" />
					</svg>
					<p className="ml-[20px] text-[#475060]" style={{ fontFamily: "Jost" }}>Share On Facebook</p>
				</div>
				<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[20px]">
					<path d="M10.2938 11.5167L10.6639 11.8835C10.8205 12.0388 11.0739 12.0388 11.2289 11.8835L16.8825 6.28086C17.0392 6.12556 17.0392 5.87444 16.8825 5.72079L11.2289 0.116475C11.0722 -0.038826 10.8189 -0.038826 10.6639 0.116475L10.2938 0.483252C10.1355 0.640204 10.1388 0.896286 10.3005 1.04993L14.7225 5.33915L0.400004 5.33915C0.178335 5.33915 0 5.51592 0 5.73566L0 6.26434C0 6.48408 0.178335 6.66086 0.400004 6.66086L14.7225 6.66086L10.3005 10.9501C10.1372 11.1037 10.1338 11.3598 10.2938 11.5167Z" fill="#142630" />
				</svg>
			</div>
			<div className="w-full bg-white flex rounded-[30px] p-[10px] items-center mt-[10px] justify-between cursor-pointer">
				<div className="items-center flex">
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="40" height="40" rx="20" fill="#2BDB4E" />
						<path d="M27.0045 12.9062C25.1339 11.0312 22.6429 10 19.9955 10C14.5312 10 10.0848 14.4464 10.0848 19.9107C10.0848 21.6562 10.5402 23.3616 11.4062 24.8661L10 30L15.2545 28.6205C16.7009 29.4107 18.3304 29.8259 19.9911 29.8259H19.9955C25.4554 29.8259 30 25.3795 30 19.9152C30 17.2679 28.875 14.7812 27.0045 12.9062ZM19.9955 28.1563C18.5134 28.1563 17.0625 27.7589 15.7991 27.0089L15.5 26.8304L12.3839 27.6473L13.2143 24.6071L13.0179 24.2946C12.192 22.9821 11.7589 21.4688 11.7589 19.9107C11.7589 15.3705 15.4554 11.6741 20 11.6741C22.2009 11.6741 24.2679 12.5312 25.8214 14.0893C27.375 15.6473 28.3304 17.7143 28.3259 19.9152C28.3259 24.4598 24.5357 28.1563 19.9955 28.1563ZM24.5134 21.9866C24.2679 21.8616 23.0491 21.2634 22.8214 21.183C22.5938 21.0982 22.4286 21.058 22.2634 21.308C22.0982 21.558 21.625 22.1116 21.4777 22.2813C21.3348 22.4464 21.1875 22.4688 20.942 22.3438C19.4866 21.6161 18.5312 21.0446 17.5714 19.3973C17.317 18.9598 17.8259 18.9911 18.2991 18.0446C18.3795 17.8795 18.3393 17.7366 18.2768 17.6116C18.2143 17.4866 17.7188 16.2679 17.5134 15.7723C17.3125 15.2902 17.1071 15.3571 16.9554 15.3482C16.8125 15.3393 16.6473 15.3393 16.4821 15.3393C16.317 15.3393 16.0491 15.4018 15.8214 15.6473C15.5938 15.8973 14.9554 16.4955 14.9554 17.7143C14.9554 18.933 15.8438 20.1116 15.9643 20.2768C16.0893 20.442 17.7098 22.942 20.1964 24.0179C21.7679 24.6964 22.3839 24.7545 23.1696 24.6384C23.6473 24.567 24.6339 24.0402 24.8393 23.4598C25.0446 22.8795 25.0446 22.3839 24.9821 22.2813C24.9241 22.1696 24.7589 22.1071 24.5134 21.9866Z" fill="white" />
					</svg>
					<p className="ml-[20px] text-[#475060]" style={{ fontFamily: "Jost" }}>Share On WhatsApp</p>
				</div>
				<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[20px]">
					<path d="M10.2938 11.5167L10.6639 11.8835C10.8205 12.0388 11.0739 12.0388 11.2289 11.8835L16.8825 6.28086C17.0392 6.12556 17.0392 5.87444 16.8825 5.72079L11.2289 0.116475C11.0722 -0.038826 10.8189 -0.038826 10.6639 0.116475L10.2938 0.483252C10.1355 0.640204 10.1388 0.896286 10.3005 1.04993L14.7225 5.33915L0.400004 5.33915C0.178335 5.33915 0 5.51592 0 5.73566L0 6.26434C0 6.48408 0.178335 6.66086 0.400004 6.66086L14.7225 6.66086L10.3005 10.9501C10.1372 11.1037 10.1338 11.3598 10.2938 11.5167Z" fill="#142630" />
				</svg>
			</div>
			<div className="w-full bg-white flex rounded-[30px] p-[10px] items-center mt-[10px] justify-between cursor-pointer">
				<div className="items-center flex">
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="40" height="40" rx="20" fill="#0A66C2" />
						<path d="M14.4768 29.9996H10.3304V16.6469H14.4768V29.9996ZM12.4013 14.8254C11.0754 14.8254 10 13.7272 10 12.4013C10 11.7645 10.253 11.1537 10.7033 10.7033C11.1537 10.253 11.7645 10 12.4013 10C13.0382 10 13.649 10.253 14.0993 10.7033C14.5497 11.1537 14.8027 11.7645 14.8027 12.4013C14.8027 13.7272 13.7268 14.8254 12.4013 14.8254ZM29.9955 29.9996H25.858V23.4996C25.858 21.9504 25.8268 19.9638 23.7022 19.9638C21.5464 19.9638 21.2161 21.6469 21.2161 23.3879V29.9996H17.0741V16.6469H21.0509V18.4683H21.1089C21.6625 17.4192 23.0147 16.3121 25.0321 16.3121C29.2286 16.3121 30 19.0754 30 22.6647V29.9996H29.9955Z" fill="white" />
					</svg>
					<p className="ml-[20px] text-[#475060]" style={{ fontFamily: "Jost" }}>Share On Linkedin</p>
				</div>
				<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[20px]">
					<path d="M10.2938 11.5167L10.6639 11.8835C10.8205 12.0388 11.0739 12.0388 11.2289 11.8835L16.8825 6.28086C17.0392 6.12556 17.0392 5.87444 16.8825 5.72079L11.2289 0.116475C11.0722 -0.038826 10.8189 -0.038826 10.6639 0.116475L10.2938 0.483252C10.1355 0.640204 10.1388 0.896286 10.3005 1.04993L14.7225 5.33915L0.400004 5.33915C0.178335 5.33915 0 5.51592 0 5.73566L0 6.26434C0 6.48408 0.178335 6.66086 0.400004 6.66086L14.7225 6.66086L10.3005 10.9501C10.1372 11.1037 10.1338 11.3598 10.2938 11.5167Z" fill="#142630" />
				</svg>
			</div>
		</div>
	)
}

export default Social;