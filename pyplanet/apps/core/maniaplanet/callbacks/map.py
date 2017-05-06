from pyplanet.core.events import Callback, handle_generic
from pyplanet.core.instance import Controller


async def handle_map_begin(source, signal, **kwargs):
	# Retrieve and update map, return it to our callback listeners.
	map = await Controller.instance.map_manager.handle_map_change(source)
	return dict(map=map)

async def handle_map_end(source, signal, **kwargs):
	# Retrieve and update map, return it to our callback listeners.
	map = await Controller.instance.map_manager.handle_map_change(source)
	return dict(map=map)

async def handle_playlist_modified(source, signal, **kwargs):
	# Make sure the map manager fetches the updated maplist.
	updated = await Controller.instance.map_manager.handle_playlist_change(source)
	if not isinstance(source, dict):
		source = dict()
	source['maps_updated'] = updated
	return source

async def handle_map_start(source, signal, **kwargs):
	# Get the map
	map = await Controller.instance.map_manager.get_map(source['map']['uid'])
	return dict(
		time=source['time'], count=source['count'], restarted=source['restarted'], map=map,
	)


# We don't use scripted map events due to the information we get and the stability of the information structure.
map_begin = Callback(
	call='ManiaPlanet.BeginMap',
	namespace='maniaplanet',
	code='map_begin',
	target=handle_map_begin,
)

map_end = Callback(
	call='ManiaPlanet.EndMap',
	namespace='maniaplanet',
	code='map_end',
	target=handle_map_end,
)

playlist_modified = Callback(
	call='ManiaPlanet.MapListModified',
	namespace='maniaplanet',
	code='playlist_modified',
	target=handle_playlist_modified
)

map_start = Callback(
	call='Script.Maniaplanet.StartMap_Start',
	namespace='maniaplanet',
	code='map_start',
	target=handle_map_start
)

map_start__end = Callback(
	call='Script.Maniaplanet.StartMap_End',
	namespace='maniaplanet',
	code='map_start',
	target=handle_map_start
)