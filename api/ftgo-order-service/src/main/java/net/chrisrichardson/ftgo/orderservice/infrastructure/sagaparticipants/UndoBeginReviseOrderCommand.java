package net.chrisrichardson.ftgo.orderservice.infrastructure.sagaparticipants;

public class UndoBeginReviseOrderCommand extends OrderCommand {

  protected UndoBeginReviseOrderCommand() {
  }

  public UndoBeginReviseOrderCommand(long orderId) {
    super(orderId);
  }
}
