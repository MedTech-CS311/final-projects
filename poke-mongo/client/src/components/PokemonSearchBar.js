var x = "search";
const PokemonSearchBar = ({ searchQuery, setSearchQuery }) => {
    
    const onSubmit = (e) => {
        alert("3asba");
        e.preventDefault();
    };

    return (
        <>
        <input
                onInput={(e) => alert(document.getElementById("header-search").value)}
                type="text"
                id="header-search"
                placeholder="Search blog posts"
                name="s"
            />
            <button type="submit">{x}</button>
        
        </>
            
            
    );
};

export default PokemonSearchBar;