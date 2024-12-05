import classNames from "classnames";
import styles from "./RadioButton.module.scss";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	error?: React.ReactNode;
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const RadioButton = ({
	children,
	className,
	error = false,
	inputProps,
	...props
}: Props) => (
	<div className={classNames(className, styles.wrapper)} {...props}>
		<label className={styles.label}>
			<div className={styles.box}>
				<input
					{...inputProps}
					className={classNames(
						inputProps?.className,
						styles.input,
						error && styles.inputError,
					)}
					type={inputProps?.type ?? "radio"}
				/>
				<div className={styles.check} />
			</div>
			{children}
		</label>
		{error && <div className={styles.error}>{error}</div>}
	</div>
);

export default RadioButton;
