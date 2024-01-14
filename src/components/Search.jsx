import React from 'react';

export default function Search({ setSearchParams }) {
	return <button onClick={() => setSearchParams({ search: 'sw' })}></button>;
}
