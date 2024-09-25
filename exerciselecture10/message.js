//arrow Function
const message = () => {
	const question = "Apa kabar hari ini?";
	const respons = "Baik-baik saja.";
	
	//gunakan backtics (`)
	return `
		<h2>${question}</h2>
		<hr />
		<ul>
			<li><strong>Jawaban:</strong> ${respons}</li>
		</ul>
	`;
};

//export
export default message;