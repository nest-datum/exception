import { Exception } from './exception';

export function ExceptionNotFound(Base: any = Error): any {
	abstract class ExceptionNotFoundAbstract extends Exception(Base) {
	};

	return ExceptionNotFoundAbstract;
};
