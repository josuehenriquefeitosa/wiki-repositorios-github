import {ItemContainer} from './styles'

export const ItemRepo = ({repo, key}) =>{
	return (
		<ItemContainer key={key}>
			<h3>	{repo.name}	</h3>
			<p> {repo.full_name} </p>
			<a href={html_url} target='_blank'>Ver repositório</a> <br/>
			<a href='#' className='remover'>Remover</a>
			<hr></hr>
		</ItemContainer>
	)
}
