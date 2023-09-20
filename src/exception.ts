
export function Exception(Base: any = Error): any {
	abstract class ExceptionAbstract extends Base {
		constructor(...properties: any) {
			super(...properties);
		}
	};

	return ExceptionAbstract;
};
