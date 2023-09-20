import { Exception } from './exception';

export function ExceptionUnauthorized(Base: any = Error): any {
	abstract class ExceptionUnauthorizedAbstract extends Exception(Base) {
	};

	return ExceptionUnauthorizedAbstract;
};
