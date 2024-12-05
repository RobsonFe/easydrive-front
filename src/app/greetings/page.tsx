import Layout from "@/components/layout";

const greetings = () => {
	return (
		<Layout title="Easy Drive">
			<div className="grid grid-cols-1">
				<p className="text-lg p-5">Bem Vindos ao Sistema de Alugéis de Carro.</p>
			</div>
		</Layout>
	)
 };
export default greetings;