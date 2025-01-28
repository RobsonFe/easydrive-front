import Layout from "@/components/layout";

const greetings = () => {
	return (
		<Layout title="Easy Drive">
			<div className="grid grid-cols-1">
				<p className="text-lg p-5">Bem Vindos ao Sistema de Alugueis de Veículos Easy Drive. Nosso sistema oferece uma plataforma intuitiva e fácil de usar para alugar veículos de forma rápida e segura. Com uma ampla variedade de carros disponíveis, garantimos que você encontrará o veículo perfeito para suas necessidades. Aproveite nossas ofertas exclusivas e tenha uma experiência de aluguel sem complicações. Easy Drive, sua melhor escolha para mobilidade.</p>
			</div>
		</Layout>
	)
 };
export default greetings;