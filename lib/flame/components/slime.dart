import 'package:flame/components.dart';
import 'package:flame_forge2d/flame_forge2d.dart';
import 'package:ricochlime/flame/components/bullet.dart';
import 'package:ricochlime/flame/ricochlime_game.dart';

enum SlimeState {
  idle,
  walk,
  attack,
  hurt,
  dead,
}

class Slime extends BodyComponent with ContactCallbacks {
  final Vector2 position;
  final Vector2 size = Vector2(32, 32);

  int hp;

  /// The current movement, if any
  _SlimeMovement? _movement;

  /// The animated sprite component
  late final _SlimeAnimation _animation;

  Slime({
    required this.position,
    required this.hp,
  }) {
    renderBody = false;
    _animation = _SlimeAnimation();
    add(_animation);
  }

  @override
  void update(double dt) {
    super.update(dt);

    if (_movement != null) {
      _movement!.elapsedSeconds += dt;
      if (_movement!.isFinished) {
        body.setType(BodyType.static);
        body.linearVelocity = Vector2.zero();
        position.setFrom(_movement!.targetPosition);
        body.position.setFrom(_movement!.targetPosition);
        _movement = null;
        _animation.walking = false;
      }
    }
  }

  /// Moves the slime down to the next row
  void moveDown(Duration duration) {
    _movement = _SlimeMovement(
      startingPosition: body.position.clone(),
      targetPosition: body.position + Vector2(0, size.y / 2),
      totalSeconds: duration.inMilliseconds / 1000,
    );
    _animation.walking = true;
    body.setType(BodyType.kinematic);
    body.linearVelocity = _movement!.velocity;
  }

  @override
  Body createBody() {
    final shape = PolygonShape()
        ..set([
          Vector2(9, 15),
          Vector2(9, 23),
          Vector2(23, 23),
          Vector2(23, 15),
          Vector2(20, 13),
          Vector2(12, 13),
        ]);
    final fixtureDef = FixtureDef(
      shape,
      userData: this,
    );

    final bodyDef = BodyDef(
      position: position,
      fixedRotation: true,
    );
    return world.createBody(bodyDef)..createFixture(fixtureDef);
  }

  @override
  void beginContact(Object other, Contact contact) {
    super.beginContact(other, contact);

    if (other is Bullet) {
      hp -= 1;
      if (hp <= 0) {
        removeFromParent();
      }
    }
  }
}

class _SlimeMovement {
  final Vector2 startingPosition;
  final Vector2 targetPosition;
  final double totalSeconds;
  double elapsedSeconds = 0;

  late final Vector2 velocity = (targetPosition - startingPosition) / totalSeconds;

  _SlimeMovement({
    required this.startingPosition,
    required this.targetPosition,
    required this.totalSeconds,
  });

  bool get isFinished => elapsedSeconds >= totalSeconds;
}

class _SlimeAnimation extends SpriteAnimationGroupComponent<SlimeState>
    with HasGameRef<RicochlimeGame> {

  bool _walking = false;
  bool get walking => _walking;
  set walking(bool value) {
    _walking = value;
    if (value) {
      current = SlimeState.walk;
    } else {
      current = SlimeState.idle;
    }
  }

  @override
  Future<void> onLoad() async {
    animations = await getAnimations();
    current = SlimeState.idle;
    await super.onLoad();

    width = 32;
    height = 32;
  }

  Future<Map<SlimeState, SpriteAnimation>> getAnimations() async => {
    SlimeState.idle: await gameRef.loadSpriteAnimation(
      'slime.png',
      SpriteAnimationData.sequenced(
        stepTime: 1 / 4,
        textureSize: Vector2(32, 32),
        amount: 4,
        amountPerRow: 4,
      ),
    ),
    SlimeState.walk: await gameRef.loadSpriteAnimation(
      'slime.png',
      SpriteAnimationData.sequenced(
        stepTime: 0.5 / 6,
        textureSize: Vector2(32, 32),
        amount: 6,
        amountPerRow: 6,
        texturePosition: Vector2(0, 1 * 32),
      ),
    ),
    SlimeState.attack: await gameRef.loadSpriteAnimation(
      'slime.png',
      SpriteAnimationData.sequenced(
        stepTime: 1 / 7,
        textureSize: Vector2(32, 32),
        amount: 7,
        amountPerRow: 7,
        texturePosition: Vector2(0, 2 * 32),
      ),
    ),
    SlimeState.hurt: await gameRef.loadSpriteAnimation(
      'slime.png',
      SpriteAnimationData.sequenced(
        stepTime: 1 / 3,
        textureSize: Vector2(32, 32),
        amount: 3,
        amountPerRow: 3,
        texturePosition: Vector2(0, 3 * 32),
      ),
    ),
    SlimeState.dead: await gameRef.loadSpriteAnimation(
      'slime.png',
      SpriteAnimationData.sequenced(
        stepTime: 1 / 5,
        textureSize: Vector2(32, 32),
        amount: 5,
        amountPerRow: 5,
        texturePosition: Vector2(0, 4 * 32),
      ),
    ),
  };
}
