'use babel';

export const indentStyles = [ 'spaces' ];
export const indentSizes  = [ 2, 4 ];

// id is used for the command identifer as well hence the `set-indent:` prefix
export const toId = (softTabs, tabSize) => `set-indent:${softTabs ? 'spaces' : 'tabs'}-${tabSize}`;

export const toLabel = (softTabs, tabSize) => `${softTabs ? 'Spaces' : 'Tabs'}: ${tabSize}`;

export const getIndentConfigs = _ => {
	const indentConfigs = [];

	indentStyles.forEach( style => {
		indentSizes.forEach( tabSize => {
			const softTabs = ( style === 'spaces' );

			indentConfigs.push({
				id: toId(softTabs, tabSize),
				label: toLabel(softTabs, tabSize),
				softTabs,
				tabSize,
			});
		});
	});

	return indentConfigs;
};

export const getCommand = indentConfig => indentConfig.id;

export const getCommands = _ => getIndentConfigs().map( getCommand );
