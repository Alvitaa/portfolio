function CreditsModal() {
    return (
        <div className="bg-neutral-200 w-1/2 rounded-xl text-center z-1">
            <h1 className="bg-main text-white rounded-t-xl p-3 text-3xl font-bold leading-15">Credits</h1>
            <div className="p-5">
                <p>Developer - Juan Alva</p>
                <h3 className="text-2xl font-bold leading-15">Fonts</h3>
                <p>Inter - <a href="https://rsms.me/inter/">Rasmus Andersson</a></p>
                <h3 className="text-2xl font-bold leading-15">Images and Icons</h3>
                <p>Sky image - <a href="https://www.pexels.com/es-es/foto/casa-pintoresca-frente-al-mar-con-exuberante-vegetacion-32918344/">Dr. Mohammad</a></p>
                <p>Stair render - Juan Alva</p>
                <p>Gravel image - <a href="https://www.freepik.com/free-photo/vertical-closeup-small-stones-sunlight-nice-picture-backgrounds-wallpapers_10835353.htm#fromView=keyword&page=1&position=10&uuid=e5f03266-8480-4d25-b1cb-eba094fb5fb0&query=Stone+gravel+texture">Wirestock</a> </p>
                <p>Flag of Peru SVG - <a href="https://en.wikipedia.org/wiki/File:Flag_of_Peru.svg">Wikipedia</a></p>
                <p>Overwatch SVG - <a href="https://overwatch.blizzard.com/">Blizzard Entertainment</a></p>
                <h3 className="text-2xl font-bold leading-15">Additional Dependencies</h3>
                <p>React Icons</p>
            </div>
        </div>
    );
}

export default CreditsModal;