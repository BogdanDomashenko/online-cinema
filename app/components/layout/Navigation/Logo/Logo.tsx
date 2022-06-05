import Link from "next/link";
import { FC } from "react";

import style from "./Logo.module.scss";

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className={style.logo}>
				<span className={style.span}>Online Cinema</span>
			</a>
		</Link>
	);
};

export default Logo;
