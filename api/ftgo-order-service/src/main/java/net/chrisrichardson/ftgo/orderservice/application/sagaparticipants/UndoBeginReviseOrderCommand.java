package net.chrisrichardson.ftgo.orderservice.application.sagaparticipants;

public class UndoBeginReviseOrderCommand extends OrderCommand {

  protected UndoBeginReviseOrderCommand() {
  }

  public UndoBeginReviseOrderCommand(long orderId) {
    super(orderId);
  }
}
