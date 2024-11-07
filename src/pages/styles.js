import styled from "styled-components";
import { VscGithub } from "react-icons/vsc";

export const Container = styled.div`
	width: 100%;
	height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;
	border: 1px solid red;
	margin: 20px 0 0 0;
`

export const GithubIcon = styled(VscGithub)`
	color: #fff;
	border: 1px solid red;
	font-size: 72px;

`